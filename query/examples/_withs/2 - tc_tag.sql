-- tv_tag,

tc_tag AS (
    SELECT  pk_tag
        -- ,   slug_en_tag
        -- ,   slug_pt_tag

    FROM td_tag
	JOIN tv_tag  ON  td_tag.pk_tag  =  tv_tag.pk_tag

	WHERE (
            pk_tag          = :pk_tag
            -- slug_en_tag     = :slug_tag  
        -- OR  slug_pt_tag     = :slug_tag
            -- prop_tag        = :prop_tag
    )
)
