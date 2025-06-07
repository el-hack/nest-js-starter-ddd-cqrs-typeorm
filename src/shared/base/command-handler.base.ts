export abstract class CommandHandlerBase<TCommand, TResult = void> {
    abstract execute(command: TCommand): Promise<TResult>;
}

export type CommandHandler<TCommand, TResult = void> = CommandHandlerBase<TCommand, TResult>;  