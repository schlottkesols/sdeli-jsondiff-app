package com.sdeli.diffservice.entries;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;

@RestController
public class EntryController {

    @GetMapping("/entries/{id}")
    public ArrayList<Entry> getRequests(@PathVariable String id){
        ArrayList<Entry> entries = new ArrayList<>();

        entries.add(new Entry("1", "1234","v1", "{}", LocalDateTime.now()));
        entries.add(new Entry("2", "1234","v2", "{}", LocalDateTime.now()));

        return entries;
    }
}
