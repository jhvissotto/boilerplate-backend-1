tj_tag_post_user AS (
	SELECT 
          td_tag.*
		, td_post.*
		, td_user.*

	FROM td_tag

	JOIN tr_post_tag   ON  td_tag.pk_tag    =  tr_post_tag.fk_tag
	JOIN td_post       ON  td_post.pk_post  =  tr_post_tag.fk_post

	JOIN tr_user_post  ON  td_post.pk_post  =  tr_user_post.fk_post
	JOIN td_user       ON  td_user.pk_user  =  tr_user_post.fk_user
)