import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {

  constructor(
  ) {}

  public getConfigData(){
    return {
      apiBaseUrl:"http://localhost/app-pricedb-back/web/",
      loginAction:"login",
      userAction:"users",
      appName: "app_pricedb_dev_"
    };
  }

}
