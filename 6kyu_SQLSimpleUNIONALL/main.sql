alter table ussales add column location text default 'US';
alter table eusales add column location text default 'EU';

select * from ussales where price > 50
union all
select * from eusales where price > 50
order by location desc, id;