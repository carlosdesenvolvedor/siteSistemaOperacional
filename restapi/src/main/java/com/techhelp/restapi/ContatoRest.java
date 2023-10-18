package com.techhelp.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techhelp.restapi.database.RepositorioContato;
import com.techhelp.restapi.entidade.Contato;

@RestController
@RequestMapping("/contato")
public class ContatoRest {
    @Autowired //spring instacia o objeto e injeta no atributo repositorio acriado
    private RepositorioContato repositorio;



    //definição dos métodos no banco de dado
    @GetMapping("/listar")
    public List<Contato> listar(){
        return repositorio.findAll();
    }
    @PostMapping("/salvar")
    public void salvar(@RequestBody Contato contato){
        repositorio.save(contato);

    }
    @PutMapping("/alterar")
    public void alterar(@RequestBody Contato contato){
        if(contato.getId()>0){
           repositorio.save(contato); 
        }
    }
    @DeleteMapping("/delete")
    public void excluir(@RequestBody Contato contato){
        repositorio.delete(contato);
    }

}
