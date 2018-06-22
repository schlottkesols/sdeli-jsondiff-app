package com.sdeli.diffservice.entries;

import java.time.LocalDateTime;

public class Entry {
    public String id;
    public String entryId;
    public String version;
    public String payload;
    public LocalDateTime createAt;

    public Entry() {

    }

    public Entry(String id, String entryId, String version, String payload, LocalDateTime createAt) {
        this.id = id;
        this.entryId = entryId;
        this.version = version;
        this.payload = payload;
        this.createAt = createAt;
    }
}
