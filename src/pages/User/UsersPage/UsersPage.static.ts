import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

export interface User {
    id: string
    email: string;
    role: string;
    imgUrl?: string;
    error?: string;
  }

  export interface RefetchFunction<TPageData> {
    (options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined): Promise<QueryObserverResult<User[], unknown>>;
  }