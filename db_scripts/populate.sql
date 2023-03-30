# Do not change the order or names of states 
#(the code is assuming specific IDs and names)
# You can add more in the end
insert into game_state (gst_state) values ('Waiting');
insert into game_state (gst_state) values ('Started');
insert into game_state (gst_state) values ('Finished');
insert into game_state (gst_state) values ('Canceled');

# Do not change the order, but you can add more in the end
insert into user_game_state (ugst_state) values ('Waiting');
insert into user_game_state (ugst_state) values ('Playing');
insert into user_game_state (ugst_state) values ('End');
insert into user_game_state (ugst_state) values ('Score');
insert into user_game_state (ugst_state) values ('Choosing');
insert into user_game_state (ugst_state) values ('Resolving');


# Possible end game states
insert into scoreboard_state (sbs_state) values ('Tied');
insert into scoreboard_state (sbs_state) values ('Lost');
insert into scoreboard_state (sbs_state) values ('Won');



# ----------- NEW --------------

insert into card_type (ct_name) values ('Attack'),('Heal'),('Defense');

insert into deck_type (dck_name) values ('Base'),('Red'),('Blue');
insert into card_position (pos_name) values ('Deck'),('Hand'),('Slot 1'),('Slot 2'),('Slot 3'),('Cemitery');

insert into card (crd_cost,crd_name, crd_initial_hp, crd_attack,  crd_type_id, crd_deck_type_id) values 
   (1,"Rat",1,2,1,1),
   (2,"Dog",3,1,3,1),
   (3,"Lion",3,5,1,2),
   (2,"Camel",3,2,3,2),
   (3,"Polar Bear",4,4,1,2),
   (1,"Penguin",3,1,3,2);

INSERT INTO user VALUES (1,'me','$2b$10$Wemfac2wY/7RSCdKxuYUL.GV2clfhXC66OL76uCpDFUmpYZ/bGZtW','48MnTVJ6sKIvanVHbP5Vx5rysbYrVN4EbYmk4D8xESdfm1hx8jDfNFZGNw9OZs'),(2,'me2','$2b$10$6j2xIDnnxv.TLfBSstbbO.qE7wFTf5envx/uijiFjCP3slsy7EE4K','dQ7NrsbPsuF81xFGNioR1K0tiYkjtxOhemcgMhuFIS68VrFUC9gggm3JCgzkqe');
INSERT INTO game VALUES (1,1,2);
INSERT INTO user_game VALUES (1,1,20,3,1,1,2),(2,2,20,3,2,1,1);

  
INSERT INTO user_game_card VALUES 
# ------------ player 1 deck
   (1,1,1,1,1,1),
   (2,1,1,2,1,1),
   (3,1,1,1,1,1),
   (4,1,2,1,3,1),
   (5,1,2,2,3,1),
   (6,1,3,1,3,1),
   (7,1,3,2,3,1),
   (8,1,4,1,3,1),
   (9,1,4,1,3,1),
   (10,1,4,1,3,1),
# ------------ player 2 deck
   (11,2,1,1,1,1),
   (12,2,1,1,1,1),
   (13,2,1,1,1,1),
   (14,2,2,2,3,1),
   (15,2,2,1,3,1),
   (16,2,5,1,4,1),
   (17,2,5,1,4,1),
   (18,1,6,2,3,1),
   (19,1,6,2,3,1),
   (20,1,6,1,3,1);