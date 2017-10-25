import { getBackendConfiguration, IBackendConfiguration } from './configuration.backend';

export type Environment = 'Dev' | 'Prod';
const currentEnv: Environment = process.env.NODE_ENV === 'production' ? 'Prod' : 'Dev';

export const backend: IBackendConfiguration = getBackendConfiguration(currentEnv);
