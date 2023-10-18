package com.techhelp.restapi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class PaginaController {
    @GetMapping("/cadastro") // Defina a rota desejada
    public String exibirPaginaCadastro() {
        //return "html/index"; // Isso faz referência ao arquivo HTML em resources/static/html/index.html
        return "ola mundo";
    }
    
}
