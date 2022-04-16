class ValidaCpf {
    constructor(cpf) {
   this.cpf = cpf;
    }
    get cpfLimpo() {
        return this.cpf.replace(/\D+/g, "");
    }
    get cpfisRepeat() {
        
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo; 
    }
    get cpfTirar2digitos() {
        
        return this.cpf.slice(0,-2);

    }
    get cpfTirar2digitoLimpo() {
        
        return this.cpfLimpo.slice(0,-2);

    }
    
    validar() {
        if(this.cpfisRepeat) {
      return false;
        }
        else if(this.cpfLimpo.length != 11) {
           
 return false;
        }
        else if(this.cpf == undefined || this.cpf === "" || isNaN(this.cpfLimpo)) {
         return false;
        }
        else {
        let cpf_primeirodigito = this.cpfTirar2digitos + this.digito(10, this.cpfTirar2digitoLimpo);
        let cpf_primeirodigitoLimpo = this.cpfTirar2digitoLimpo + this.digito(10, this.cpfTirar2digitoLimpo);
      
      return cpf_primeirodigito + this.digito(11,cpf_primeirodigitoLimpo) === this.cpf;
      

        }
    }

    digito (numero, cpfLimpo) {
      
        let digito = Array.from(cpfLimpo).reduce((acumulador, valor) => {
         let operacao = Number.parseInt(valor) * numero;
          
    
         numero --;
       acumulador = operacao + acumulador;

        
        return acumulador;
        
        },0) % 11;
      
     digito = 11 - digito;
      digito = digito > 9 ? "0" : digito.toString();
      
      return digito;
    }

}
const cpf = new ValidaCpf("483.270.518-06");
console.log(cpf.validar());
