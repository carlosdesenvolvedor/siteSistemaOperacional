package com.techhelp.restapi;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @Autowired // spring instacia o objeto e injeta no atributo repositorio acriado
    private RepositorioContato repositorio;

    // definição dos métodos no banco de dado
    @GetMapping("/listar-usuario")
    public List<Contato> listar() {
        return repositorio.findAll();
    }

    @PostMapping("/salvar-usuario")
    public void salvar(@RequestBody Contato contato) {
        repositorio.save(contato);

    }

    /*
     * @PutMapping("/alterar-usuario")
     * public void alterar(@RequestBody Contato contato){
     * if(contato.getId()>0){
     * repositorio.save(contato);
     * }
     * }
     */
    @GetMapping("/editar-usuario/{id}")
    public ResponseEntity<Contato> getClienteParaEdicao(@PathVariable Long id) {
        // Verifique se o ID é válido antes de retornar o cliente
        if (id > 0) {
            Contato cliente = repositorio.findById(id).orElse(null);
            if (cliente != null) {
                // Adicione uma mensagem de depuração
                System.out.println("Cliente encontrado para edição: " + cliente.toString());
                return ResponseEntity.ok(cliente);
            }
        }
        // Adicione uma mensagem de depuração para casos em que o cliente não é
        // encontrado
        System.out.println("Cliente não encontrado para edição. ID: " + id);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/editar-usuario/{id}")
    public ResponseEntity<Void> editarUsuario(@RequestBody Contato contato, @PathVariable Long id) {
        // Verifique se o ID é válido antes de editar o usuário
        if (id > 0) {
            Contato usuarioExistente = repositorio.findById(id).orElse(null);
            if (usuarioExistente != null) {
                // Atualize os campos do usuário existente com os novos dados
                usuarioExistente.setNome(contato.getNome());
                usuarioExistente.setSenha(contato.getSenha());
                usuarioExistente.setTelefone(contato.getTelefone());
                usuarioExistente.setEmal(contato.getEmal());
                usuarioExistente.setUrlAvatar(contato.getUrlAvatar());

                // Salve as alterações no banco de dados
                repositorio.save(usuarioExistente);

                return ResponseEntity.ok().build();
            }
        }

        return ResponseEntity.notFound().build();
    }

    /*
     * @DeleteMapping("/delete-usuario")
     * public void excluir(@RequestBody Contato contato){
     * repositorio.delete(contato);
     * }
     */
    @DeleteMapping("/excluir-usuario/{id}") // Use {id} na URL para passar o ID do usuário
    public void excluir(@PathVariable Long id) {
        // Verifique se o ID é válido antes de excluir o usuário
        if (id > 0) {
            // Encontre o usuário pelo ID e exclua-o
            repositorio.deleteById(id);
        }
    }

    @PostMapping("/verificar-login")
    public ResponseEntity<String> verificarLogin(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
    
        // Realize a verificação do login no banco de dados
        Contato usuario = repositorio.findByNomeAndSenha(username, password);
    
        if (usuario != null) {
            // Se o login for válido, você pode gerar um token de autenticação, 
            // armazená-lo em uma sessão e redirecionar para a página autorizada.
            // Neste exemplo, apenas retornarei a mensagem de sucesso.
            return ResponseEntity.ok("https://silly-brigadeiros-a18f43.netlify.app/index_menu.html");
        } else {
            // Se o login for inválido, retorne uma mensagem de erro
            return ResponseEntity.badRequest().body("Login inválido. Verifique seu usuário e senha.");
        }
    }
    
    

}
