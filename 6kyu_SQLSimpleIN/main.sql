select departments.id, departments.name from departments
where departments.id in (select department_id from sales where price > 98)