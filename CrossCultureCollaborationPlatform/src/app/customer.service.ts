import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Souvenir } from "./Souvenir";
import { Customer } from "./customer";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private baseUrl = "http://localhost:8080/api/customers";
  public loginCheck: boolean;
  public value;
  public selectedSouvenir: Souvenir;
  public username;
  public loggedInCustomer: Customer;

  constructor(private http: HttpClient) {}

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getAllUsers`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {
      responseType: "text"
    });
  }

  authenticate(customer: Customer): Observable<any> {
    //alert("divya");
    return this.http.post(
      `${this.baseUrl}` + `/authenticate`,
      customer
    );
  }

  getLoggedInUser(authenticateString: String): Observable<any> {
    //alert("divya");
    return this.http.post(
      `${this.baseUrl}` + `/getLoggedInUser`,
      authenticateString
    );
  }

  getPurchasedProduct(customer: Object): Observable<any> {
    //alert("divya");
    return this.http.post(`${this.baseUrl}` + `/getPurchasedProduct`, customer);
  }

  updateSoldCount(souvenir: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/updateSoldCount`, souvenir);
  }
  updateSoldCount1(customer: Customer): Observable<Object> {
    console.log("in post: " + customer.id);
    return this.http.post(`${this.baseUrl}` + `/updateSoldCount1`, customer);
  }

  attachProfile(authenticateString: String): Observable<any> {
    //alert("divya");
    return this.http.post(
      `${this.baseUrl}` + `/attachProfile`,
      authenticateString
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("loggedinuser");
    sessionStorage.removeItem("password");
  }

  getSouvenirs(): Observable<Object> {
    var souvenirList = this.http.get(`${this.baseUrl}` + `/getSouvenirs`);
    return souvenirList;
  }
}
