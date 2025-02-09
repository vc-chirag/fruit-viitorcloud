import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { createClient, PostgrestResponse } from '@supabase/supabase-js';
import { catchError, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase;

  constructor() {
    this.supabase = createClient(environment.SUPABASE.url, environment.SUPABASE.key);
  }

  getRecords(params): Observable<any> {
    const ascendingOption = params.selectedSortOptions === 'asc' ? true : false;
    const query = this.supabase.from(params.tblName).select(params.select).order(params.orderByColumn, { ascending: ascendingOption });
    if (params.limitCondition && params.limitCondition !== null) {
      query.limit(params.limitCondition);
    }
    return from(query)
  }


  get(resource, select = "*", where = null, limit = null): Observable<any> {
    const query = this.supabase.from(resource).select(select);
    if (where !== null) {
      where(query);
    }
    if (limit !== null) {
      query.limit(limit);
    }
    return from(query)
  }

  getCustomerData(): Observable<any[]> {
    return from(this.supabase.rpc('get_customer_data')).pipe(
      map((response: PostgrestResponse<any>) => {
        if (response.error) throw response.error;
        return response.data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
