export interface IQuack {
    please(): string;
}

export function ducker() : IQuack {
    return {
        please: () => "QuackQuack QuackQuackQuack !!"
    }
}