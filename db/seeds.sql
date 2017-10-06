USE adventure_awaits_db;

ALTER TABLE `pages` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `pages` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

ALTER TABLE `stories` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `stories` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

INSERT INTO stories (story_title, story_description) VALUES ('Sci-Fi', 'You are a space faring hero...');
INSERT INTO stories (story_title, story_description) VALUES ('Mystery', 'You are the detective...');
INSERT INTO stories (story_title, story_description) VALUES ('Vampires', 'You don\'t sparkle, you burst into flame...');
INSERT INTO stories (story_title, story_description) VALUES ('Adventure', 'You are an archeology professor...');

INSERT INTO pages (page_title, page_text, page_choice1, page_choice_text1, id_story, page_parent_id) VALUES ('It was a dark and stormy night...', 'This is a place holder...', 0, 'Choice1', '1','0');
INSERT INTO pages (page_title, page_text, page_choice1, page_choice_text1, id_story, page_parent_id) VALUES ('It was a dark and stormy night...', 'This is a place holder...', 0, 'Choice1', '2','0');
INSERT INTO pages (page_title, page_text, page_choice1, page_choice_text1, id_story, page_parent_id) VALUES ('It was a dark and stormy night...', 'This is a place holder...', 0, 'Choice1', '3','0');
INSERT INTO pages (page_title, page_text, page_choice1, page_choice_text1, id_story, page_parent_id) VALUES ('It was a dark and stormy night...', 'This is a place holder...', 0, 'Choice1', '4','0');
