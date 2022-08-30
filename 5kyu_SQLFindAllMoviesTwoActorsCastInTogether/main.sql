select f.title from film as f
join film_actor as a1 on f.film_id = a1.film_id
join film_actor as a2 on f.film_id = a2.film_id
where a1.actor_id = 105 and a2.actor_id = 122
order by f.title;