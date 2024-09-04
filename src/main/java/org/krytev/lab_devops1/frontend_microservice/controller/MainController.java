package org.krytev.lab_devops1.frontend_microservice.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

    @GetMapping
    public String getMainPage(){
        return "index";
    }

}
