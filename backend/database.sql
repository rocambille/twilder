create table user(
  id int(11) unsigned primary key not null auto_increment,
  email varchar(255) unique not null,
  hashedPassword varchar(255) not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null
) engine=InnoDB default charset=latin1;

create table twild (
  id int(11) unsigned primary key not null auto_increment,
  url varchar(255) unique not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null
) engine=InnoDB default charset=latin1;

create table tag (
  id int(11) unsigned primary key not null auto_increment,
  name varchar(255) unique not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null
) engine=InnoDB default charset=latin1;

create table share(
  user_id int(11) unsigned not null,
  twild_id int(11) unsigned not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null,
  primary key (user_id, twild_id),
  foreign key (user_id) references user(id) on update cascade,
  foreign key (twild_id) references user(id) on update cascade
) engine=InnoDB default charset=latin1;

create table comment(
  user_id int(11) unsigned not null,
  twild_id int(11) unsigned not null,
  content text not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null,
  primary key (user_id, twild_id),
  foreign key (user_id) references user(id) on update cascade,
  foreign key (twild_id) references user(id) on update cascade
) engine=InnoDB default charset=latin1;

create table tag_twild(
  tag_id int(11) unsigned not null,
  twild_id int(11) unsigned not null,
  created_at datetime default current_timestamp,
  updated_at datetime default current_timestamp on update current_timestamp,
  deleted_at datetime default null,
  primary key (tag_id, twild_id),
  foreign key (tag_id) references tag(id) on update cascade,
  foreign key (twild_id) references user(id) on update cascade
) engine=InnoDB default charset=latin1;
