-- tp_post,

tn_post_tag AS (
	SELECT
		tp_post.sr_post, 
		ROW_NUMBER() OVER(PARTITION BY fk_post ORDER BY RAND()) AS rn_post, -- tag by post
		td_post.*,
		td_tag.*

	FROM tr_post_tag
	JOIN tp_post  ON  tp_post.pk_post  =  tr_post_tag.fk_post

	JOIN td_post  ON  td_post.pk_post  =  tr_post_tag.fk_post
	JOIN td_tag   ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
)
,
tq_post_tag AS (
	SELECT *
	FROM tn_post_tag
	WHERE rn_post <= :many_tag
)

