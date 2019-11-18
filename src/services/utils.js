//vendors
import { filter, map, mergeMap, catchError } from 'rxjs/operators';

//services
import { fetchSpotPrice } from './get-spot';

const fetchEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === "FETCH_SPOT_PRICE"),
    mergeMap( fetchSpotPrice ),
    catchError(err => {throw new Error()})
  )
}

export default fetchEpic;