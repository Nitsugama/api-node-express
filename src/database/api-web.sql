
CREATE DATABASE api-web;
USE api-web;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(500) NOT NULL,
  `user_pass` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_pass`) VALUES
(1, 'Nitsugama', 'pinhatapinha@gmail.com', '1234');

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);


ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;