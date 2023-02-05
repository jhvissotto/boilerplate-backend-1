WITH 
tv_table

SELECT  
        pk_field
    ,   slug_en_field
    ,   slug_pt_field

WHERE (
    pk_field        = :pk_field
    slug_en_field   = :slug_field OR 
    slug_pt_field   = :slug_field
)

FROM tv_table