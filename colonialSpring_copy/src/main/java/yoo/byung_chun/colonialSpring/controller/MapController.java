package yoo.byung_chun.colonialSpring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yoo.byung_chun.colonialSpring.model.Map;
import yoo.byung_chun.colonialSpring.model.Menu;
import yoo.byung_chun.colonialSpring.repository.MapRepository;
import yoo.byung_chun.colonialSpring.repository.MenuRepository;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@RestController("mapControllerV1")
@RequestMapping("/map")
@CrossOrigin("http://localhost:8100")
public class MapController {
    @Inject
    private MapRepository mapRepository;

    @RequestMapping(value="/getAllMap", method= RequestMethod.GET)
    public ResponseEntity<Iterable<Map>> getAllMap (){
        Iterable<Map> allMap = mapRepository.findAll();
        return new ResponseEntity<Iterable<Map>>(allMap, HttpStatus.OK);
    }
    @RequestMapping(value="/post", method=RequestMethod.POST)
    public ResponseEntity<List<Map>> postMap(@RequestBody List<Map> map){
        mapRepository.save(map);
        return new ResponseEntity<List<Map>>(HttpStatus.CREATED);
    }

}
