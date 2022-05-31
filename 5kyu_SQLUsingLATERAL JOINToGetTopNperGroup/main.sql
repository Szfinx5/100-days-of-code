select categories.id as category_id, categories.category, posts.title, posts.views, post_id from categories
left join lateral (select id as post_id, category_id, title, views from posts where category_id = categories.id
                  order by views desc, id
                  limit 2) as posts 
on categories.id = posts.category_id
order by categories.category, posts.views desc, posts.post_id;