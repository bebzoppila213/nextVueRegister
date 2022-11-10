class Validate {
    errors = []

    field = ""

    setField(field) {
        this.field = field
        this.errors = []
        return this
    }

    minLength(lenght) {
        if (this.field.length < lenght) {
            this.errors.push('Нарушена минимальная длинна')
        }
        return this
    }

    isEmail() {
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.field))) {
            this.errors.push('Емаил не верный')
        }
        return this
    }

    required() {
        if (this.field.length === 0) {
            this.errors.push('Поле не заполнено')
        }
        return this
    }
}

export const validate = new Validate()