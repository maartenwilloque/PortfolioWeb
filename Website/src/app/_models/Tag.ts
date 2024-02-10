export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }

}