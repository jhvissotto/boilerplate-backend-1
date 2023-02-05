WITH
tb_numered_post_tag AS (
    SELECT *
    ,   ROW_NUMBER() OVER(PARTITION BY post ORDER BY RAND()) AS rn_post

    FROM td_post

    JOIN tr_post_tag    ON td_post.pk_post  = tr_post_tag.fk_post
    JOIN td_tag         ON td_tag.pk_tag    = tr_post_tag.fk_tag
)

SELECT *
FROM tb_numered_post_tag
WHERE rn_post = 1 