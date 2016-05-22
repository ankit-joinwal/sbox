package com.bitlogic.sociallbox.service.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.bitlogic.sociallbox.data.model.requests.VerificationToken;
import com.bitlogic.sociallbox.service.business.EOAdminService;
import com.bitlogic.sociallbox.service.business.UserService;

@Controller
@RequestMapping("/")
public class ViewController extends BaseController{

	private static final Logger LOGGER = LoggerFactory.getLogger(ViewController.class);
	@Autowired
	private UserService userService;
	
	@Autowired
	private EOAdminService eoAdminService;
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	 @RequestMapping(method = RequestMethod.GET)
     public ModelAndView getIndexPage() {
         return new ModelAndView("index");
     }
    
	 @RequestMapping(value="/terms",method = RequestMethod.GET)
     public ModelAndView getTermsPage() {
		
         return new ModelAndView("terms");
     }
	 @RequestMapping(value="/privacy",method = RequestMethod.GET)
     public ModelAndView getPrivacyPage() {
		
         return new ModelAndView("privacy");
     }
	 
	 @RequestMapping(value="/eo",method = RequestMethod.GET)
     public ModelAndView getEOIndexPage() {
		
         return new ModelAndView("eoindex");
     }
	 
	 @RequestMapping(value="/eo/login",method = RequestMethod.GET)
     public ModelAndView getLoginPage() {
		
         return new ModelAndView("login");
     }
	 
	/* @RequestMapping(value="/eo/verifyEmail",method = RequestMethod.GET)
     public ModelAndView getEmailVerificationPage() {
		
         return new ModelAndView("verifyEmail");
     }*/
	 
	 @RequestMapping(value="/nimda/login",method = RequestMethod.GET)
     public ModelAndView getAdminLoginPage() {
         return new ModelAndView("adminLogin");
     }
	 
	 @RequestMapping(value="/eo/home",method = RequestMethod.GET)
     public ModelAndView getHomePage() {
         return new ModelAndView("home");
     }
	 
	 @RequestMapping(value="/nimda/home",method = RequestMethod.GET)
     public ModelAndView getAdminHomePage() {
         return new ModelAndView("adminHome");
     }
	 
	 @RequestMapping(value="/eo/dashboard",method = RequestMethod.GET)
     public ModelAndView getDashboardPage() {
         return new ModelAndView("dashboard");
     }
	 
	 @RequestMapping(value="/nimda/organizers",method = RequestMethod.GET)
     public ModelAndView getAdminDashboardPage() {
         return new ModelAndView("organizers");
     }
	 
	 @RequestMapping(value="/nimda/organizers/search",method = RequestMethod.GET)
     public ModelAndView getSearchOrganizersPage() {
         return new ModelAndView("searchOrganizers");
     }
	 
	 @RequestMapping(value="/eo/profile",method = RequestMethod.GET)
     public ModelAndView getProfilePage() {
		
         return new ModelAndView("profile");
     }
	 
	 @RequestMapping(value="/eo/company",method = RequestMethod.GET)
     public ModelAndView getCompanyPage() {
		
         return new ModelAndView("company");
     }
	 
	 @RequestMapping(value="/nimda/organizers/detail",method = RequestMethod.GET)
     public ModelAndView getCompanyDetailsForAdminPage() {
		
         return new ModelAndView("companyDetails");
     }
	 
	 @RequestMapping(value="/eo/company/new",method = RequestMethod.GET)
     public ModelAndView getNewCompanyPage() {
		
         return new ModelAndView("newCompany");
     }
	 
	 @RequestMapping(value="/eo/events/new",method = RequestMethod.GET)
     public ModelAndView getCreateEventPage() {
		
         return new ModelAndView("createEvent");
     }
	 
	 @RequestMapping(value="/eo/events/list",method = RequestMethod.GET)
     public ModelAndView getEventsListPage() {
		
         return new ModelAndView("eventsHome");
     }
	 
	 @RequestMapping(value="/eo/events/details",method = RequestMethod.GET)
     public ModelAndView getEventsDetailsPage() {
         return new ModelAndView("eventDetails");
     }
	 
	 @RequestMapping(value="/eo/events/edit",method = RequestMethod.GET)
     public ModelAndView getEditEventPage() {
		
         return new ModelAndView("editEvent");
     }
	 
	 
	 @RequestMapping(value="/nimda/events/details",method = RequestMethod.GET)
     public ModelAndView getEventsDetailsPageForAdmin() {
         return new ModelAndView("eventDetailsForAdmin");
     }
	 
	@RequestMapping(value = "/eo/verifyEmail", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public RedirectView verifyEmail(
			@RequestParam(required = true, value = "token") String token) {
		this.userService.verifyEmail(token);
		return new RedirectView("/eo/login");
	}
	
	@RequestMapping(value = "/eo/company/verifyEmail", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseStatus(HttpStatus.OK)
	public RedirectView verifyCompanyEmail(
			@RequestParam(required = true, value = "token") String token) {
		this.eoAdminService.verifyCompanyEmail(token);
		return new RedirectView("/eo/login");
	}
	 
}
