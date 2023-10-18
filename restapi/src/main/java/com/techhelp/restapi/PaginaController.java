package com.techhelp.restapi;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class PaginaController {
    
    @GetMapping("/cadastro")
    public String exibirPaginaCadastro() {
        return "login"; // Este retorno faz referência ao arquivo HTML em resources/static/login.html
    }
    
}


