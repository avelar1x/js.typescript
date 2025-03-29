class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.isValid();

        if (isValid) {
            alert("Formulário enviado");
            this.formulario.submit();
        }
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.createError(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if (campo.classList.contains("cpf")) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains("usuario")) {
                if (!this.validUser(campo)) valid = false;
            }

            if (campo.classList.contains("senha")) {
                if (!this.validPassword(campo)) valid = false;
            }
        }

        return valid;
    }

    validUser(campo) {
        const user = campo.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(campo, "Usuário precisa ter entre 3 e 12 caracteres");
            valid = false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/)) {
            this.createError(campo, "Usuário precisa conter apenas letras e/ou números");
            valid = false;
        }

        return valid;
    }

    validPassword(campo) {
        const password = this.formulario.querySelector('.senha');
        const repeatPassword = this.formulario.querySelector(".repetir-senha");
        let valid = true;

        if (password.value !== repeatPassword.value) {
            valid = false;
            this.createError(repeatPassword, "Repetir senha precisa ser igual à senha");
        }

        if (password.value.length < 6 || password.value.length > 12) {
            this.createError(campo, "Senha precisa ter entre 6 e 12 caracteres");
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.createError(campo, "CPF inválido");
            return false;
        }
        return true;
    }

    createError(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new ValidaFormulario();
