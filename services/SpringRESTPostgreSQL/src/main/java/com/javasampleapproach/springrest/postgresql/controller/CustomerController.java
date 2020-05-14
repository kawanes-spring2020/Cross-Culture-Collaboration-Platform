package com.javasampleapproach.springrest.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.postgresql.model.Customer;
import com.javasampleapproach.springrest.postgresql.model.Souvenir;
import com.javasampleapproach.springrest.postgresql.repo.CustomerRepository;
import com.javasampleapproach.springrest.postgresql.repo.SouvenirRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CustomerController {

	@Autowired
	CustomerRepository repository;
	
	@Autowired
	SouvenirRepository souvenirRepository;

//	@GetMapping("/customers")
//	public List<Customer> getAllCustomers() {
//		System.out.println("Get all Customers...");
//
//		List<Customer> customers = new ArrayList<>();
//		repository.findAll().forEach(customers::add);
//
//		return customers;
//	}

	@PostMapping(value = "/customers/create")
	public Customer postCustomer(@RequestBody Customer customer) {
		System.out.println("customer is: "+customer);

		Customer _customer = repository.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getFirstname(), customer.getLastname(), customer.getYear()));
		return _customer;
	}
		
	
	
	@PostMapping(value = "/customers/getLoggedInUser")
	public Customer getLoggedInCustomer(@RequestBody String credentials) {
		String username = credentials.split("~")[0];
		String password = credentials.split("~")[1];
		Customer validUser = null;
		List<Customer> customerList = (List<Customer>) repository.findAll();
		for(Customer cust : customerList) {
			if(cust.getUsername().equals(username) && cust.getPassword().equals(password)) {
				validUser = cust;
				break;
			}
		}
		System.out.println("validUser: " + validUser);
		return validUser;
		//getCredentials();
		//Customer _customer = repository.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getFirstname(), customer.getLastname()));
	}
	
//	@PostMapping(value = "/customers/getPurchasedProduct")
//	public Souvenir getPurchasedProduct(@RequestBody Customer customer) {
//		Souvenir Souvenir = null;
//		List<Souvenir> customerList = (List<Souvenir>) souvenirRepository.findAll();
//		for(Souvenir cust : customerList) {
//			if(cust.getId()==customer.getSouvenirbrought()) {
//				Souvenir = cust;
//				break;
//			}
//		}
//		System.out.println("product is: "+Souvenir.getItemImg() );
//		return Souvenir;
//		//getCredentials();
//		//Customer _customer = repository.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getFirstname(), customer.getLastname()));
//	}
	
	@PostMapping(value = "/customers/attachProfile")
	public Customer attachProfileCustomer(@RequestBody String credentials) {
		String username = credentials.split("~")[0];
		String password = credentials.split("~")[1];
		String url = credentials.split("~")[2];
		Customer validUser = null;
		List<Customer> customerList = (List<Customer>) repository.findAll();
		for(Customer cust : customerList) {
			if(cust.getUsername().equals(username) && cust.getPassword().equals(password)) {
				validUser = cust;
				validUser.setProfile(url);
				repository.save(validUser);
				break;
			}
		}
		
		System.out.println("validUser: " + validUser);
		return validUser;
		//getCredentials();
		//Customer _customer = repository.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getFirstname(), customer.getLastname()));
	}
	
	@PostMapping(value = "/customers/authenticate")
	public boolean authenticateCustomer(@RequestBody Customer customer) {
		String username = customer.getUsername();
		String password =customer.getPassword();
		boolean validUser = false;
		List<Customer> customerList = (List<Customer>) repository.findAll();
		for(Customer cust : customerList) {
			if(cust.getUsername().equals(username) && cust.getPassword().equals(password)) {
				validUser = true;
				break;
			}
		}
		System.out.println("validUser: " + validUser);
		return validUser;
		//getCredentials();
		//Customer _customer = repository.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getFirstname(), customer.getLastname()));
	}
	
	@GetMapping(value = "/customers/getSouvenirs")
	public List<Souvenir> findAllSouvenirs() {
		List<Souvenir> newList = new ArrayList<Souvenir>();
		List<Souvenir> SouvenirList = (List<Souvenir>) souvenirRepository.findAll();
		return SouvenirList;
	}
	
	@GetMapping(value = "/customers/getAllUsers")
	public List<Customer> getAllUsers() {
		//List<Customer> newList = new ArrayList<Customer>();
		List<Customer> customerList = (List<Customer>) repository.findAll();
		return customerList;
	}

//	@DeleteMapping("/customers/{id}")
//	public ResponseEntity<String> deleteCustomer(@PathVariable("id") long id) {
//		System.out.println("Delete Customer with ID = " + id + "...");
//
//		repository.deleteById(id);
//
//		return new ResponseEntity<>("Customer has been deleted!", HttpStatus.OK);
//	}
//
//	@DeleteMapping("/customers/delete")
//	public ResponseEntity<String> deleteAllCustomers() {
//		System.out.println("Delete All Customers...");
//
//		repository.deleteAll();
//
//		return new ResponseEntity<>("All customers have been deleted!", HttpStatus.OK);
//	}

	
	@PostMapping(value = "/customers/updateSoldCount")
	public String updateSoldCount(@RequestBody Souvenir souvenir) {
		List<Souvenir> newList = new ArrayList<Souvenir>();
		List<Souvenir> SouvenirList = (List<Souvenir>) souvenirRepository.findAll();
		for(Souvenir s:SouvenirList) {
			if(souvenir.getId()==s.getId()) {
				s.setItemsBought(s.getItemsBought()+1);
				souvenirRepository.save(s);
				break;
			}
		}
		
		return "Success";
	}
	
	@PostMapping(value = "/customers/updateSoldCount1")
	public String updateSoldCount1(@RequestBody Customer customer) {
		System.out.println("**" +customer);
		List<Customer> customerList = (List<Customer>) repository.findAll();
		System.out.println("list"+customerList);
		for(Customer s:customerList) {
			if(customer.getId()==s.getId()) {
				s.setSouvenirbrought(customer.getSouvenirbought());
				repository.save(s);
				System.out.println("customer is:"+s.getSouvenirbought());
				break;
			}
		}
		
		return "Success";
	}
	

}
