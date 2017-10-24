import { Environment } from "./configuration";

export interface IBackendConfiguration {
    url: string
}

interface ArgumentPattern<T> {
    Dev: () => T;
    Prod: () => T;
}

export function getBackendConfiguration(env: Environment): IBackendConfiguration {
    let pattern = {
        Dev: () => ({ url: 'http://DevBackend'}),
        Prod: () => ({ url: 'http://ProdBackend'})
    };

    return matchArgument(pattern)(env);
}

function matchArgument<T>(p: ArgumentPattern<T>): (env: Environment) => T {
    return (env: Environment): T => {
        if (env === 'Dev') {
            return p.Dev();
        }
        else if (env === 'Prod') {
            return p.Prod();
        }

        throw new Error(`matchArgument: Could not match type ${typeof env}`);
    };
}
