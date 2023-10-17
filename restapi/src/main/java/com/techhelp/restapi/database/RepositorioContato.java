package com.techhelp.restapi.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techhelp.restapi.entidade.Contato;

public interface RepositorioContato extends JpaRepository<Contato,Long>{
    

    
}
