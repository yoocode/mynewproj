package yoo.byung_chun.colonialSpring.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yoo.byung_chun.colonialSpring.model.Menu;
import yoo.byung_chun.colonialSpring.repository.MenuRepository;

import javax.inject.Inject;

@RestController("menuControllerV1")
@RequestMapping("/menu")
@CrossOrigin("http://localhost:8100")
public class MenuController {

    @Inject
    private MenuRepository menuRepository;

    @RequestMapping(value="/getAll", method=RequestMethod.GET)
    public ResponseEntity<Iterable<Menu>> getAllMenu (){
        Iterable<Menu> allMenu = menuRepository.findAll();
        return new ResponseEntity<Iterable<Menu>>(allMenu, HttpStatus.OK);
    }

    @RequestMapping(value="/post", method=RequestMethod.POST)
    public ResponseEntity<?> postMenu(@RequestBody Menu menu){
        menuRepository.save(menu);
        return new ResponseEntity<Object>(HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<?> deleteMenu(@PathVariable Long id){
        menuRepository.delete(id);
        return new ResponseEntity<Object>(HttpStatus.OK);
    }

}
