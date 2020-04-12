let knjige = sveKnjige();

function sveKnjige() {
    let knjige = require("../BookInfo/index");
    return knjige;
}

function addKnjiga(id, naziv, autor) {
    let knjiga = {
        id: id,
        naziv: naziv,
        autor: autor
    };

    knjige.push(knjiga);
}

function getKnjiga(id){
    for(let i = 0; i < knjige.length; i++) {
        if(knjige[i].id === id){
            return knjige[i];
        } 
    }
}

function postaviAutora(naziv, autor) {
    for(let i = 0; i < knjige.length; i++) {
        if(knjige[i].naziv.toLowerCase() === naziv.toLowerCase()){
            knjige[i].autor = autor;
        } 
    }
}

function deleteKnjiga(id) {
    for(let i = 0; i < knjige.length; i++) {
        if(knjige[i].id === id){
            knjige.splice(i, 1);
        } 
    }
}

function getKnjigaByAuthor(autor) {
    let noveKnjige = [];
    for(let i = 0; i < knjige.length; i++) {
        if(knjige[i].autor.toLowerCase() === autor.toLowerCase()){
            noveKnjige.push(knjige[i]);
        } 
    }

    return noveKnjige;
}

