package com.momsherbal.backend.controller;

import com.momsherbal.backend.model.Order;
import com.momsherbal.backend.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return repo.save(order);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return repo.findAll();
    }
}
