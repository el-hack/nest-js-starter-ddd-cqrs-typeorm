export abstract class BaseService {
    protected logger = new (console as any).constructor();

    protected log(message: string): void {
        this.logger.log(`[${this.constructor.name}] ${message}`);
    }
}

export abstract class ServiceBase extends BaseService {}  