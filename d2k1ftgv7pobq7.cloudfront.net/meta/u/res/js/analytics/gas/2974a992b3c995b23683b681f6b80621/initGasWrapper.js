if(!window.AnalyticsWebClient)throw Error("The GasWrapper can't be initialized without AnalyticsWebClient.");if(!window.GasWrapper)throw Error("The GasWrapper can't be initialized without the class file.");function _initAnalyticsWebClient(){var e=null;try{e=window.localStorage&&window.localStorage.idMe?JSON.parse(window.localStorage.idMe):null}catch(e){}var t="DEV",a="api-gateway.trellis.coffee/gateway/api/gasv3/api/v1";"trello.com"===location.host&&(t="PROD",a="api-gateway.trello.com/gateway/api/gasv3/api/v1"),"trellis.coffee"===location.host&&(t="STAGING");var i=new AnalyticsWebClient.default({env:AnalyticsWebClient.envType[t],product:"trello",locale:bestLocale()},{apiHost:a});return e&&i.setUserInfo(AnalyticsWebClient.userType.TRELLO,e),i.setTenantInfo(AnalyticsWebClient.tenantType.NONE),i}window.gas=new GasWrapper(_initAnalyticsWebClient());