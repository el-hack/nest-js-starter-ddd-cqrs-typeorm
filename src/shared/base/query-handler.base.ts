export abstract class QueryHandlerBase<TQuery, TResult> {
    abstract execute(query: TQuery): Promise<TResult>;
}

export type QueryHandler<TQuery, TResult> = QueryHandlerBase<TQuery, TResult>;  