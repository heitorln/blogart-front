import { Component } from '@angular/core';
import { PostService } from '../post/post.service';
import { AuthService } from '../auth/auth.service'; // Suponha que você tenha um serviço de autenticação

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postTitle: string = '';
  postContent: string = '';

  constructor(
    private postService: PostService,
    private authService: AuthService // Suponha que você tenha um serviço de autenticação
  ) { }

  onSubmit() {
    const newPost = {
      title: this.postTitle,
      content: this.postContent,
      userId: this.authService.getUserId(), // Suponha que você tenha uma função para obter o ID do usuário logado
    };

    const token = this.authService.getToken(); // Suponha que você tenha uma função para obter o token JWT

    this.postService.createPost(newPost, token).subscribe(response => {
      // Lógica para lidar com a resposta após a criação da postagem
      console.log('Postagem criada com sucesso:', response);
      // Limpar os campos do formulário após a criação da postagem
      this.postTitle = '';
      this.postContent = '';
    });
  }
}
