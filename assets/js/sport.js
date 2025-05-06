import { initializeGallery } from '../../assets/js/loadImages.js';

const images = {

    
    '10Mila' : ['250504-10Mila-1', '250504-10Mila-2', '250504-10Mila-3', '250504-10Mila-4', '250504-10Mila-5', '250504-10Mila-6', '250504-10Mila-7', '250504-10Mila-8', '250504-10Mila-9', 
        '250504-10Mila-10', '250504-10Mila-11', '250504-10Mila-12', '250504-10Mila-13', '250504-10Mila-14', '250504-10Mila-15', '250504-10Mila-16', '250504-10Mila-17', '250504-10Mila-18', 
        '250504-10Mila-19', '250504-10Mila-20', '250504-10Mila-21', '250504-10Mila-22', '250504-10Mila-23', '250504-10Mila-24', '250504-10Mila-25', '250504-10Mila-26', '250504-10Mila-27', 
        '250504-10Mila-28', '250504-10Mila-29', '250504-10Mila-30', '250504-10Mila-31', '250504-10Mila-32', '250504-10Mila-33', '250504-10Mila-34', '250504-10Mila-35', '250504-10Mila-36', 
        '250504-10Mila-37', '250504-10Mila-38', '250504-10Mila-39', '250504-10Mila-40', '250504-10Mila-41', '250504-10Mila-42', '250504-10Mila-43', '250504-10Mila-44', '250504-10Mila-45', 
        '250504-10Mila-46', '250504-10Mila-47', '250504-10Mila-48', '250504-10Mila-49', '250504-10Mila-50', '250504-10Mila-51', '250504-10Mila-52', '250504-10Mila-53', '250504-10Mila-55', 
        '250504-10Mila-56', '250504-10Mila-57', '250504-10Mila-58', '250504-10Mila-59', '250504-10Mila-54', '250504-10Mila-60', '250504-10Mila-61', '250504-10Mila-62', '250504-10Mila-63', 
        '250504-10Mila-64', '250504-10Mila-65', '250504-10Mila-66', '250504-10Mila-67', '250504-10Mila-68', '250504-10Mila-69', '250504-10Mila-70', '250504-10Mila-71', '250504-10Mila-72', 
        '250504-10Mila-74', '250504-10Mila-75', '250504-10Mila-76', '250504-10Mila-77', '250504-10Mila-78', '250504-10Mila-79', '250504-10Mila-80', '250504-10Mila-73', '250504-10Mila-81', 
        '250504-10Mila-82', '250504-10Mila-83', '250504-10Mila-84', '250504-10Mila-85', '250504-10Mila-86', '250504-10Mila-87', '250504-10Mila-88', '250504-10Mila-90', '250504-10Mila-89'],

    '10Mila Youth Relay' : ['250503-10Mila_ungdomsstafett-1', '250503-10Mila_ungdomsstafett-2', '250503-10Mila_ungdomsstafett-3', '250503-10Mila_ungdomsstafett-4', '250503-10Mila_ungdomsstafett-5', 
        '250503-10Mila_ungdomsstafett-6', '250503-10Mila_ungdomsstafett-7', '250503-10Mila_ungdomsstafett-8', '250503-10Mila_ungdomsstafett-9', '250503-10Mila_ungdomsstafett-10', 
        '250503-10Mila_ungdomsstafett-11', '250503-10Mila_ungdomsstafett-12', '250503-10Mila_ungdomsstafett-13', '250503-10Mila_ungdomsstafett-14', '250503-10Mila_ungdomsstafett-15', 
        '250503-10Mila_ungdomsstafett-16', '250503-10Mila_ungdomsstafett-17', '250503-10Mila_ungdomsstafett-18', '250503-10Mila_ungdomsstafett-19', '250503-10Mila_ungdomsstafett-20', 
        '250503-10Mila_ungdomsstafett-21', '250503-10Mila_ungdomsstafett-22', '250503-10Mila_ungdomsstafett-23', '250503-10Mila_ungdomsstafett-24', '250503-10Mila_ungdomsstafett-25', 
        '250503-10Mila_ungdomsstafett-26', '250503-10Mila_ungdomsstafett-27', '250503-10Mila_ungdomsstafett-28', '250503-10Mila_ungdomsstafett-29', '250503-10Mila_ungdomsstafett-30', 
        '250503-10Mila_ungdomsstafett-31', '250503-10Mila_ungdomsstafett-32', '250503-10Mila_ungdomsstafett-33', '250503-10Mila_ungdomsstafett-34', '250503-10Mila_ungdomsstafett-35', 
        '250503-10Mila_ungdomsstafett-36', '250503-10Mila_ungdomsstafett-37', '250503-10Mila_ungdomsstafett-38', '250503-10Mila_ungdomsstafett-39', '250503-10Mila_ungdomsstafett-40', 
        '250503-10Mila_ungdomsstafett-41', '250503-10Mila_ungdomsstafett-42', '250503-10Mila_ungdomsstafett-43', '250503-10Mila_ungdomsstafett-44', '250503-10Mila_ungdomsstafett-45', 
        '250503-10Mila_ungdomsstafett-46', '250503-10Mila_ungdomsstafett-47', '250503-10Mila_ungdomsstafett-48', '250503-10Mila_ungdomsstafett-49', '250503-10Mila_ungdomsstafett-50', 
        '250503-10Mila_ungdomsstafett-51', '250503-10Mila_ungdomsstafett-52', '250503-10Mila_ungdomsstafett-53', '250503-10Mila_ungdomsstafett-54', '250503-10Mila_ungdomsstafett-55', 
        '250503-10Mila_ungdomsstafett-56', '250503-10Mila_ungdomsstafett-57', '250503-10Mila_ungdomsstafett-58', '250503-10Mila_ungdomsstafett-59', '250503-10Mila_ungdomsstafett-60', 
        '250503-10Mila_ungdomsstafett-61', '250503-10Mila_ungdomsstafett-62', '250503-10Mila_ungdomsstafett-63', '250503-10Mila_ungdomsstafett-64', '250503-10Mila_ungdomsstafett-65', 
        '250503-10Mila_ungdomsstafett-66', '250503-10Mila_ungdomsstafett-67', '250503-10Mila_ungdomsstafett-68', '250503-10Mila_ungdomsstafett-69', '250503-10Mila_ungdomsstafett-70', 
        '250503-10Mila_ungdomsstafett-71', '250503-10Mila_ungdomsstafett-72', '250503-10Mila_ungdomsstafett-73', '250503-10Mila_ungdomsstafett-74', '250503-10Mila_ungdomsstafett-75', 
        '250503-10Mila_ungdomsstafett-76', '250503-10Mila_ungdomsstafett-77', '250503-10Mila_ungdomsstafett-78', '250503-10Mila_ungdomsstafett-79', '250503-10Mila_ungdomsstafett-80', 
        '250503-10Mila_ungdomsstafett-81', '250503-10Mila_ungdomsstafett-82', '250503-10Mila_ungdomsstafett-83', '250503-10Mila_ungdomsstafett-84', '250503-10Mila_ungdomsstafett-85', 
        '250503-10Mila_ungdomsstafett-86', '250503-10Mila_ungdomsstafett-87', '250503-10Mila_ungdomsstafett-88', '250503-10Mila_ungdomsstafett-89', '250503-10Mila_ungdomsstafett-90', 
        '250503-10Mila_ungdomsstafett-91', '250503-10Mila_ungdomsstafett-92', '250503-10Mila_ungdomsstafett-93', '250503-10Mila_ungdomsstafett-94', '250503-10Mila_ungdomsstafett-95', 
        '250503-10Mila_ungdomsstafett-96', '250503-10Mila_ungdomsstafett-97', '250503-10Mila_ungdomsstafett-98', '250503-10Mila_ungdomsstafett-99', '250503-10Mila_ungdomsstafett-100', 
        '250503-10Mila_ungdomsstafett-101', '250503-10Mila_ungdomsstafett-102', '250503-10Mila_ungdomsstafett-103', '250503-10Mila_ungdomsstafett-104', '250503-10Mila_ungdomsstafett-105', 
        '250503-10Mila_ungdomsstafett-106', '250503-10Mila_ungdomsstafett-107', '250503-10Mila_ungdomsstafett-108', '250503-10Mila_ungdomsstafett-109', '250503-10Mila_ungdomsstafett-110', 
        '250503-10Mila_ungdomsstafett-111', '250503-10Mila_ungdomsstafett-112', '250503-10Mila_ungdomsstafett-113', '250503-10Mila_ungdomsstafett-114', '250503-10Mila_ungdomsstafett-115', 
        '250503-10Mila_ungdomsstafett-116', '250503-10Mila_ungdomsstafett-117', '250503-10Mila_ungdomsstafett-118', '250503-10Mila_ungdomsstafett-119', '250503-10Mila_ungdomsstafett-120', 
        '250503-10Mila_ungdomsstafett-121', '250503-10Mila_ungdomsstafett-122', '250503-10Mila_ungdomsstafett-123', '250503-10Mila_ungdomsstafett-124', '250503-10Mila_ungdomsstafett-125', 
        '250503-10Mila_ungdomsstafett-126', '250503-10Mila_ungdomsstafett-127', '250503-10Mila_ungdomsstafett-128', '250503-10Mila_ungdomsstafett-129', '250503-10Mila_ungdomsstafett-130', 
        '250503-10Mila_ungdomsstafett-131', '250503-10Mila_ungdomsstafett-132', '250503-10Mila_ungdomsstafett-133', '250503-10Mila_ungdomsstafett-134', '250503-10Mila_ungdomsstafett-135', 
        '250503-10Mila_ungdomsstafett-136', '250503-10Mila_ungdomsstafett-137', '250503-10Mila_ungdomsstafett-138', '250503-10Mila_ungdomsstafett-139', '250503-10Mila_ungdomsstafett-140', 
        '250503-10Mila_ungdomsstafett-141', '250503-10Mila_ungdomsstafett-142', '250503-10Mila_ungdomsstafett-143', '250503-10Mila_ungdomsstafett-144', '250503-10Mila_ungdomsstafett-145', 
        '250503-10Mila_ungdomsstafett-146', '250503-10Mila_ungdomsstafett-147', '250503-10Mila_ungdomsstafett-148', '250503-10Mila_ungdomsstafett-149', '250503-10Mila_ungdomsstafett-150', 
        '250503-10Mila_ungdomsstafett-151', '250503-10Mila_ungdomsstafett-152', '250503-10Mila_ungdomsstafett-153', '250503-10Mila_ungdomsstafett-154', '250503-10Mila_ungdomsstafett-155', 
        '250503-10Mila_ungdomsstafett-156', '250503-10Mila_ungdomsstafett-157', '250503-10Mila_ungdomsstafett-158', '250503-10Mila_ungdomsstafett-159', '250503-10Mila_ungdomsstafett-160', 
        '250503-10Mila_ungdomsstafett-161', '250503-10Mila_ungdomsstafett-162', '250503-10Mila_ungdomsstafett-163', '250503-10Mila_ungdomsstafett-164', '250503-10Mila_ungdomsstafett-165', 
        '250503-10Mila_ungdomsstafett-166', '250503-10Mila_ungdomsstafett-167', '250503-10Mila_ungdomsstafett-168', '250503-10Mila_ungdomsstafett-169', '250503-10Mila_ungdomsstafett-170', 
        '250503-10Mila_ungdomsstafett-171', '250503-10Mila_ungdomsstafett-172', '250503-10Mila_ungdomsstafett-174', '250503-10Mila_ungdomsstafett-175', '250503-10Mila_ungdomsstafett-173', 
        '250503-10Mila_ungdomsstafett-176', '250503-10Mila_ungdomsstafett-177', '250503-10Mila_ungdomsstafett-178', '250503-10Mila_ungdomsstafett-179', '250503-10Mila_ungdomsstafett-180', 
        '250503-10Mila_ungdomsstafett-181', '250503-10Mila_ungdomsstafett-182', '250503-10Mila_ungdomsstafett-184', '250503-10Mila_ungdomsstafett-183', '250503-10Mila_ungdomsstafett-185', 
        '250503-10Mila_ungdomsstafett-186', '250503-10Mila_ungdomsstafett-187', '250503-10Mila_ungdomsstafett-188', '250503-10Mila_ungdomsstafett-189', '250503-10Mila_ungdomsstafett-190', 
        '250503-10Mila_ungdomsstafett-191', '250503-10Mila_ungdomsstafett-192', '250503-10Mila_ungdomsstafett-193', '250503-10Mila_ungdomsstafett-194', '250503-10Mila_ungdomsstafett-195', 
        '250503-10Mila_ungdomsstafett-196', '250503-10Mila_ungdomsstafett-197', '250503-10Mila_ungdomsstafett-198', '250503-10Mila_ungdomsstafett-199'],
    
    'Swedish League #3': ['250501-Swedish_League_3-1', '250501-Swedish_League_3-2', '250501-Swedish_League_3-3', '250501-Swedish_League_3-4', '250501-Swedish_League_3-5',
        '250501-Swedish_League_3-6', '250501-Swedish_League_3-7', '250501-Swedish_League_3-8', '250501-Swedish_League_3-9', '250501-Swedish_League_3-10', '250501-Swedish_League_3-11',
        '250501-Swedish_League_3-12', '250501-Swedish_League_3-13', '250501-Swedish_League_3-14', '250501-Swedish_League_3-15', '250501-Swedish_League_3-16', '250501-Swedish_League_3-17',
        '250501-Swedish_League_3-18', '250501-Swedish_League_3-19', '250501-Swedish_League_3-20', '250501-Swedish_League_3-21', '250501-Swedish_League_3-22', '250501-Swedish_League_3-23',
        '250501-Swedish_League_3-24', '250501-Swedish_League_3-25', '250501-Swedish_League_3-26', '250501-Swedish_League_3-27', '250501-Swedish_League_3-28', '250501-Swedish_League_3-29',
        '250501-Swedish_League_3-30', '250501-Swedish_League_3-31', '250501-Swedish_League_3-32', '250501-Swedish_League_3-33', '250501-Swedish_League_3-34', '250501-Swedish_League_3-35',
        '250501-Swedish_League_3-36', '250501-Swedish_League_3-37', '250501-Swedish_League_3-38', '250501-Swedish_League_3-39', '250501-Swedish_League_3-40', '250501-Swedish_League_3-41',
        '250501-Swedish_League_3-42', '250501-Swedish_League_3-43', '250501-Swedish_League_3-44', '250501-Swedish_League_3-45', '250501-Swedish_League_3-46', '250501-Swedish_League_3-47',
        '250501-Swedish_League_3-48', '250501-Swedish_League_3-49', '250501-Swedish_League_3-50', '250501-Swedish_League_3-51', '250501-Swedish_League_3-52', '250501-Swedish_League_3-53',
        '250501-Swedish_League_3-54', '250501-Swedish_League_3-55', '250501-Swedish_League_3-56', '250501-Swedish_League_3-57', '250501-Swedish_League_3-58', '250501-Swedish_League_3-59',
        '250501-Swedish_League_3-60', '250501-Swedish_League_3-61', '250501-Swedish_League_3-62', '250501-Swedish_League_3-63', '250501-Swedish_League_3-64', '250501-Swedish_League_3-65',
        '250501-Swedish_League_3-66', '250501-Swedish_League_3-67', '250501-Swedish_League_3-68', '250501-Swedish_League_3-69', '250501-Swedish_League_3-70', '250501-Swedish_League_3-71',
        '250501-Swedish_League_3-72', '250501-Swedish_League_3-73', '250501-Swedish_League_3-74', '250501-Swedish_League_3-75', '250501-Swedish_League_3-76', '250501-Swedish_League_3-77',
        '250501-Swedish_League_3-78', '250501-Swedish_League_3-79', '250501-Swedish_League_3-80', '250501-Swedish_League_3-81', '250501-Swedish_League_3-82', '250501-Swedish_League_3-83',
        '250501-Swedish_League_3-84', '250501-Swedish_League_3-85', '250501-Swedish_League_3-86', '250501-Swedish_League_3-87', '250501-Swedish_League_3-88', '250501-Swedish_League_3-89',
        '250501-Swedish_League_3-90', '250501-Swedish_League_3-91', '250501-Swedish_League_3-92', '250501-Swedish_League_3-93', '250501-Swedish_League_3-94', '250501-Swedish_League_3-95',
        '250501-Swedish_League_3-96', '250501-Swedish_League_3-97', '250501-Swedish_League_3-98', '250501-Swedish_League_3-99', '250501-Swedish_League_3-100', '250501-Swedish_League_3-101',
        '250501-Swedish_League_3-102', '250501-Swedish_League_3-103', '250501-Swedish_League_3-104', '250501-Swedish_League_3-105', '250501-Swedish_League_3-106', '250501-Swedish_League_3-107',
        '250501-Swedish_League_3-108', '250501-Swedish_League_3-109', '250501-Swedish_League_3-110', '250501-Swedish_League_3-111', '250501-Swedish_League_3-112', '250501-Swedish_League_3-113',
        '250501-Swedish_League_3-114', '250501-Swedish_League_3-115', '250501-Swedish_League_3-116', '250501-Swedish_League_3-117', '250501-Swedish_League_3-118', '250501-Swedish_League_3-119'],

    'Prästtomtadubbeln': ['250420-Prästtomtadubbeln-1', '250420-Prästtomtadubbeln-2', '250420-Prästtomtadubbeln-3', '250420-Prästtomtadubbeln-4', '250420-Prästtomtadubbeln-6',
        '250420-Prästtomtadubbeln-5', '250420-Prästtomtadubbeln-7', '250420-Prästtomtadubbeln-8', '250420-Prästtomtadubbeln-9', '250420-Prästtomtadubbeln-10',
        '250420-Prästtomtadubbeln-11', '250420-Prästtomtadubbeln-12', '250420-Prästtomtadubbeln-13', '250420-Prästtomtadubbeln-14', '250420-Prästtomtadubbeln-15',
        '250420-Prästtomtadubbeln-16', '250420-Prästtomtadubbeln-17', '250420-Prästtomtadubbeln-18', '250420-Prästtomtadubbeln-19', '250420-Prästtomtadubbeln-20',
        '250420-Prästtomtadubbeln-22', '250420-Prästtomtadubbeln-21', '250420-Prästtomtadubbeln-23', '250420-Prästtomtadubbeln-24', '250420-Prästtomtadubbeln-25',
        '250420-Prästtomtadubbeln-26', '250420-Prästtomtadubbeln-27', '250420-Prästtomtadubbeln-28', '250420-Prästtomtadubbeln-29', '250420-Prästtomtadubbeln-30',
        '250420-Prästtomtadubbeln-31', '250420-Prästtomtadubbeln-33', '250420-Prästtomtadubbeln-34', '250420-Prästtomtadubbeln-32', '250420-Prästtomtadubbeln-36',
        '250420-Prästtomtadubbeln-35', '250420-Prästtomtadubbeln-37', '250420-Prästtomtadubbeln-39', '250420-Prästtomtadubbeln-38', '250420-Prästtomtadubbeln-40',
        '250420-Prästtomtadubbeln-41', '250420-Prästtomtadubbeln-42', '250420-Prästtomtadubbeln-43', '250420-Prästtomtadubbeln-44', '250420-Prästtomtadubbeln-45',
        '250420-Prästtomtadubbeln-46', '250420-Prästtomtadubbeln-47', '250420-Prästtomtadubbeln-49', '250420-Prästtomtadubbeln-48'],

    'Stigtomtakavlen': ['250418-Stigtomtakavlen-2', '250418-Stigtomtakavlen-3', '250418-Stigtomtakavlen-4', '250418-Stigtomtakavlen-1', '250418-Stigtomtakavlen-5', '250418-Stigtomtakavlen-6',
        '250418-Stigtomtakavlen-7', '250418-Stigtomtakavlen-8', '250418-Stigtomtakavlen-9', '250418-Stigtomtakavlen-11', '250418-Stigtomtakavlen-10', '250418-Stigtomtakavlen-12',
        '250418-Stigtomtakavlen-13', '250418-Stigtomtakavlen-15', '250418-Stigtomtakavlen-14', '250418-Stigtomtakavlen-16', '250418-Stigtomtakavlen-17', '250418-Stigtomtakavlen-18',
        '250418-Stigtomtakavlen-20', '250418-Stigtomtakavlen-21', '250418-Stigtomtakavlen-19', '250418-Stigtomtakavlen-23', '250418-Stigtomtakavlen-24', '250418-Stigtomtakavlen-25',
        '250418-Stigtomtakavlen-26', '250418-Stigtomtakavlen-27', '250418-Stigtomtakavlen-28', '250418-Stigtomtakavlen-29', '250418-Stigtomtakavlen-30', '250418-Stigtomtakavlen-22',
        '250418-Stigtomtakavlen-31', '250418-Stigtomtakavlen-32', '250418-Stigtomtakavlen-33', '250418-Stigtomtakavlen-34', '250418-Stigtomtakavlen-36', '250418-Stigtomtakavlen-37',
        '250418-Stigtomtakavlen-35', '250418-Stigtomtakavlen-38', '250418-Stigtomtakavlen-39', '250418-Stigtomtakavlen-40', '250418-Stigtomtakavlen-41', '250418-Stigtomtakavlen-42',
        '250418-Stigtomtakavlen-44', '250418-Stigtomtakavlen-45', '250418-Stigtomtakavlen-43', '250418-Stigtomtakavlen-46', '250418-Stigtomtakavlen-47', '250418-Stigtomtakavlen-48',
        '250418-Stigtomtakavlen-49', '250418-Stigtomtakavlen-50', '250418-Stigtomtakavlen-51', '250418-Stigtomtakavlen-52', '250418-Stigtomtakavlen-53', '250418-Stigtomtakavlen-54',
        '250418-Stigtomtakavlen-55', '250418-Stigtomtakavlen-56', '250418-Stigtomtakavlen-57'],

    'Ormingemedeln': ['250412-Orminge_medeln-1', '250412-Orminge_medeln-2', '250412-Orminge_medeln-3', '250412-Orminge_medeln-4', '250412-Orminge_medeln-5', '250412-Orminge_medeln-6',
        '250412-Orminge_medeln-7', '250412-Orminge_medeln-8', '250412-Orminge_medeln-9', '250412-Orminge_medeln-10', '250412-Orminge_medeln-11', '250412-Orminge_medeln-12',
        '250412-Orminge_medeln-13', '250412-Orminge_medeln-14', '250412-Orminge_medeln-15', '250412-Orminge_medeln-16', '250412-Orminge_medeln-17', '250412-Orminge_medeln-18',
        '250412-Orminge_medeln-19', '250412-Orminge_medeln-20', '250412-Orminge_medeln-21', '250412-Orminge_medeln-22', '250412-Orminge_medeln-23', '250412-Orminge_medeln-24',
        '250412-Orminge_medeln-25', '250412-Orminge_medeln-26', '250412-Orminge_medeln-27', '250412-Orminge_medeln-28', '250412-Orminge_medeln-29', '250412-Orminge_medeln-30',
        '250412-Orminge_medeln-31', '250412-Orminge_medeln-32', '250412-Orminge_medeln-33', '250412-Orminge_medeln-34', '250412-Orminge_medeln-35', '250412-Orminge_medeln-36',
        '250412-Orminge_medeln-37', '250412-Orminge_medeln-38', '250412-Orminge_medeln-39', '250412-Orminge_medeln-40', '250412-Orminge_medeln-41', '250412-Orminge_medeln-42',
        '250412-Orminge_medeln-43', '250412-Orminge_medeln-44', '250412-Orminge_medeln-45', '250412-Orminge_medeln-47', '250412-Orminge_medeln-46', '250412-Orminge_medeln-48',
        '250412-Orminge_medeln-49', '250412-Orminge_medeln-50', '250412-Orminge_medeln-51', '250412-Orminge_medeln-52', '250412-Orminge_medeln-53', '250412-Orminge_medeln-54',
        '250412-Orminge_medeln-55', '250412-Orminge_medeln-56', '250412-Orminge_medeln-58', '250412-Orminge_medeln-57', '250412-Orminge_medeln-59', '250412-Orminge_medeln-60',
        '250412-Orminge_medeln-61', '250412-Orminge_medeln-62', '250412-Orminge_medeln-63', '250412-Orminge_medeln-64', '250412-Orminge_medeln-65', '250412-Orminge_medeln-66',
        '250412-Orminge_medeln-67', '250412-Orminge_medeln-68', '250412-Orminge_medeln-69', '250412-Orminge_medeln-70', '250412-Orminge_medeln-71', '250412-Orminge_medeln-72',
        '250412-Orminge_medeln-73', '250412-Orminge_medeln-74'],

    'Attunda medeldistans': ['250406-Attunda_medeln-2', '250406-Attunda_medeln-1', '250406-Attunda_medeln-3', '250406-Attunda_medeln-4', '250406-Attunda_medeln-5', '250406-Attunda_medeln-6',
        '250406-Attunda_medeln-7', '250406-Attunda_medeln-8', '250406-Attunda_medeln-9', '250406-Attunda_medeln-10', '250406-Attunda_medeln-11', '250406-Attunda_medeln-12',
        '250406-Attunda_medeln-13', '250406-Attunda_medeln-15', '250406-Attunda_medeln-14', '250406-Attunda_medeln-16', '250406-Attunda_medeln-17', '250406-Attunda_medeln-18',
        '250406-Attunda_medeln-19', '250406-Attunda_medeln-20', '250406-Attunda_medeln-21', '250406-Attunda_medeln-22', '250406-Attunda_medeln-24', '250406-Attunda_medeln-23',
        '250406-Attunda_medeln-25', '250406-Attunda_medeln-26', '250406-Attunda_medeln-27', '250406-Attunda_medeln-28', '250406-Attunda_medeln-29', '250406-Attunda_medeln-30',
        '250406-Attunda_medeln-31', '250406-Attunda_medeln-33', '250406-Attunda_medeln-34', '250406-Attunda_medeln-32', '250406-Attunda_medeln-35', '250406-Attunda_medeln-36',
        '250406-Attunda_medeln-37', '250406-Attunda_medeln-38', '250406-Attunda_medeln-39', '250406-Attunda_medeln-40', '250406-Attunda_medeln-41', '250406-Attunda_medeln-42',
        '250406-Attunda_medeln-43', '250406-Attunda_medeln-44', '250406-Attunda_medeln-45', '250406-Attunda_medeln-46', '250406-Attunda_medeln-47', '250406-Attunda_medeln-48',
        '250406-Attunda_medeln-49', '250406-Attunda_medeln-50', '250406-Attunda_medeln-51', '250406-Attunda_medeln-52', '250406-Attunda_medeln-53', '250406-Attunda_medeln-54',
        '250406-Attunda_medeln-56', '250406-Attunda_medeln-55', '250406-Attunda_medeln-57', '250406-Attunda_medeln-58', '250406-Attunda_medeln-59', '250406-Attunda_medeln-60',
        '250406-Attunda_medeln-61', '250406-Attunda_medeln-62', '250406-Attunda_medeln-63', '250406-Attunda_medeln-64'],

    'Attundastafetten': ['250405-Attundastafetten-1', '250405-Attundastafetten-2', '250405-Attundastafetten-3', '250405-Attundastafetten-4', '250405-Attundastafetten-5', '250405-Attundastafetten-6',
        '250405-Attundastafetten-7', '250405-Attundastafetten-8', '250405-Attundastafetten-9', '250405-Attundastafetten-10', '250405-Attundastafetten-11', '250405-Attundastafetten-12', '250405-Attundastafetten-13',
        '250405-Attundastafetten-14', '250405-Attundastafetten-15', '250405-Attundastafetten-16', '250405-Attundastafetten-17', '250405-Attundastafetten-18', '250405-Attundastafetten-19',
        '250405-Attundastafetten-20', '250405-Attundastafetten-21', '250405-Attundastafetten-22', '250405-Attundastafetten-23', '250405-Attundastafetten-24', '250405-Attundastafetten-26',
        '250405-Attundastafetten-25', '250405-Attundastafetten-27', '250405-Attundastafetten-28', '250405-Attundastafetten-29', '250405-Attundastafetten-30', '250405-Attundastafetten-31',
        '250405-Attundastafetten-32', '250405-Attundastafetten-33', '250405-Attundastafetten-34', '250405-Attundastafetten-35', '250405-Attundastafetten-36', '250405-Attundastafetten-37',
        '250405-Attundastafetten-39', '250405-Attundastafetten-40', '250405-Attundastafetten-38', '250405-Attundastafetten-41', '250405-Attundastafetten-42', '250405-Attundastafetten-43',
        '250405-Attundastafetten-44', '250405-Attundastafetten-45', '250405-Attundastafetten-46', '250405-Attundastafetten-47', '250405-Attundastafetten-48', '250405-Attundastafetten-49',
        '250405-Attundastafetten-50', '250405-Attundastafetten-51', '250405-Attundastafetten-52', '250405-Attundastafetten-53', '250405-Attundastafetten-54', '250405-Attundastafetten-55',
        '250405-Attundastafetten-56', '250405-Attundastafetten-57', '250405-Attundastafetten-58', '250405-Attundastafetten-59', '250405-Attundastafetten-60', '250405-Attundastafetten-61',
        '250405-Attundastafetten-62', '250405-Attundastafetten-63', '250405-Attundastafetten-64', '250405-Attundastafetten-65', '250405-Attundastafetten-66'],

    'Måsenstafetten': ['250329-Masen_Staffeten-1', '250329-Masen_Staffeten-2', '250329-Masen_Staffeten-3', '250329-Masen_Staffeten-4', '250329-Masen_Staffeten-5', '250329-Masen_Staffeten-6',
        '250329-Masen_Staffeten-7', '250329-Masen_Staffeten-9', '250329-Masen_Staffeten-8', '250329-Masen_Staffeten-10', '250329-Masen_Staffeten-11', '250329-Masen_Staffeten-12',
        '250329-Masen_Staffeten-13', '250329-Masen_Staffeten-14', '250329-Masen_Staffeten-15', '250329-Masen_Staffeten-16', '250329-Masen_Staffeten-17', '250329-Masen_Staffeten-18',
        '250329-Masen_Staffeten-19', '250329-Masen_Staffeten-20', '250329-Masen_Staffeten-21', '250329-Masen_Staffeten-22', '250329-Masen_Staffeten-23', '250329-Masen_Staffeten-24',
        '250329-Masen_Staffeten-25', '250329-Masen_Staffeten-26', '250329-Masen_Staffeten-27', '250329-Masen_Staffeten-28', '250329-Masen_Staffeten-29', '250329-Masen_Staffeten-30',
        '250329-Masen_Staffeten-31', '250329-Masen_Staffeten-32', '250329-Masen_Staffeten-33', '250329-Masen_Staffeten-34', '250329-Masen_Staffeten-35', '250329-Masen_Staffeten-36',
        '250329-Masen_Staffeten-37', '250329-Masen_Staffeten-38', '250329-Masen_Staffeten-40', '250329-Masen_Staffeten-41', '250329-Masen_Staffeten-39', '250329-Masen_Staffeten-42',
        '250329-Masen_Staffeten-43', '250329-Masen_Staffeten-44', '250329-Masen_Staffeten-45', '250329-Masen_Staffeten-46', '250329-Masen_Staffeten-47', '250329-Masen_Staffeten-48',
        '250329-Masen_Staffeten-50', '250329-Masen_Staffeten-49', '250329-Masen_Staffeten-51', '250329-Masen_Staffeten-52', '250329-Masen_Staffeten-53', '250329-Masen_Staffeten-54',
        '250329-Masen_Staffeten-55', '250329-Masen_Staffeten-56', '250329-Masen_Staffeten-57', '250329-Masen_Staffeten-58', '250329-Masen_Staffeten-59', '250329-Masen_Staffeten-60',
        '250329-Masen_Staffeten-61', '250329-Masen_Staffeten-62', '250329-Masen_Staffeten-63', '250329-Masen_Staffeten-64', '250329-Masen_Staffeten-65', '250329-Masen_Staffeten-66',
        '250329-Masen_Staffeten-67', '250329-Masen_Staffeten-68', '250329-Masen_Staffeten-69', '250329-Masen_Staffeten-70', '250329-Masen_Staffeten-71', '250329-Masen_Staffeten-72',
        '250329-Masen_Staffeten-73', '250329-Masen_Staffeten-74', '250329-Masen_Staffeten-75', '250329-Masen_Staffeten-76', '250329-Masen_Staffeten-77', '250329-Masen_Staffeten-79',
        '250329-Masen_Staffeten-78', '250329-Masen_Staffeten-80', '250329-Masen_Staffeten-81', '250329-Masen_Staffeten-82', '250329-Masen_Staffeten-83', '250329-Masen_Staffeten-84',
        '250329-Masen_Staffeten-85', '250329-Masen_Staffeten-86', '250329-Masen_Staffeten-87', '250329-Masen_Staffeten-88', '250329-Masen_Staffeten-89', '250329-Masen_Staffeten-90',
        '250329-Masen_Staffeten-91'],

    'Stockholm Indoor Cup Day 2': ['250202-Stockholm_Indoor_Cup_Dag_2-1', '250202-Stockholm_Indoor_Cup_Dag_2-2', '250202-Stockholm_Indoor_Cup_Dag_2-3', '250202-Stockholm_Indoor_Cup_Dag_2-4',
        '250202-Stockholm_Indoor_Cup_Dag_2-5', '250202-Stockholm_Indoor_Cup_Dag_2-6', '250202-Stockholm_Indoor_Cup_Dag_2-8', '250202-Stockholm_Indoor_Cup_Dag_2-9', '250202-Stockholm_Indoor_Cup_Dag_2-10',
        '250202-Stockholm_Indoor_Cup_Dag_2-11', '250202-Stockholm_Indoor_Cup_Dag_2-12', '250202-Stockholm_Indoor_Cup_Dag_2-13', '250202-Stockholm_Indoor_Cup_Dag_2-14',
        '250202-Stockholm_Indoor_Cup_Dag_2-15', '250202-Stockholm_Indoor_Cup_Dag_2-16', '250202-Stockholm_Indoor_Cup_Dag_2-17', '250202-Stockholm_Indoor_Cup_Dag_2-18',
        '250202-Stockholm_Indoor_Cup_Dag_2-19', '250202-Stockholm_Indoor_Cup_Dag_2-20', '250202-Stockholm_Indoor_Cup_Dag_2-21', '250202-Stockholm_Indoor_Cup_Dag_2-22',
        '250202-Stockholm_Indoor_Cup_Dag_2-23', '250202-Stockholm_Indoor_Cup_Dag_2-24', '250202-Stockholm_Indoor_Cup_Dag_2-25', '250202-Stockholm_Indoor_Cup_Dag_2-26',
        '250202-Stockholm_Indoor_Cup_Dag_2-27', '250202-Stockholm_Indoor_Cup_Dag_2-7'],

    'Stockholm Indoor Cup Day 1': ['250201-Stockholm_Indoor_Cup_Dag_1-1', '250201-Stockholm_Indoor_Cup_Dag_1-2', '250201-Stockholm_Indoor_Cup_Dag_1-3', '250201-Stockholm_Indoor_Cup_Dag_1-4',
        '250201-Stockholm_Indoor_Cup_Dag_1-5', '250201-Stockholm_Indoor_Cup_Dag_1-6', '250201-Stockholm_Indoor_Cup_Dag_1-8', '250201-Stockholm_Indoor_Cup_Dag_1-9', '250201-Stockholm_Indoor_Cup_Dag_1-10',
        '250201-Stockholm_Indoor_Cup_Dag_1-11', '250201-Stockholm_Indoor_Cup_Dag_1-12', '250201-Stockholm_Indoor_Cup_Dag_1-7', '250201-Stockholm_Indoor_Cup_Dag_1-13', '250201-Stockholm_Indoor_Cup_Dag_1-14',
        '250201-Stockholm_Indoor_Cup_Dag_1-15', '250201-Stockholm_Indoor_Cup_Dag_1-16', '250201-Stockholm_Indoor_Cup_Dag_1-17', '250201-Stockholm_Indoor_Cup_Dag_1-18', '250201-Stockholm_Indoor_Cup_Dag_1-19',
        '250201-Stockholm_Indoor_Cup_Dag_1-21', '250201-Stockholm_Indoor_Cup_Dag_1-20', '250201-Stockholm_Indoor_Cup_Dag_1-22', '250201-Stockholm_Indoor_Cup_Dag_1-23', '250201-Stockholm_Indoor_Cup_Dag_1-24',
        '250201-Stockholm_Indoor_Cup_Dag_1-25', '250201-Stockholm_Indoor_Cup_Dag_1-26', '250201-Stockholm_Indoor_Cup_Dag_1-27', '250201-Stockholm_Indoor_Cup_Dag_1-28', '250201-Stockholm_Indoor_Cup_Dag_1-29',
        '250201-Stockholm_Indoor_Cup_Dag_1-30', '250201-Stockholm_Indoor_Cup_Dag_1-31', '250201-Stockholm_Indoor_Cup_Dag_1-32', '250201-Stockholm_Indoor_Cup_Dag_1-33', '250201-Stockholm_Indoor_Cup_Dag_1-35',
        '250201-Stockholm_Indoor_Cup_Dag_1-34', '250201-Stockholm_Indoor_Cup_Dag_1-36', '250201-Stockholm_Indoor_Cup_Dag_1-37', '250201-Stockholm_Indoor_Cup_Dag_1-38', '250201-Stockholm_Indoor_Cup_Dag_1-40',
        '250201-Stockholm_Indoor_Cup_Dag_1-39', '250201-Stockholm_Indoor_Cup_Dag_1-41', '250201-Stockholm_Indoor_Cup_Dag_1-42', '250201-Stockholm_Indoor_Cup_Dag_1-43', '250201-Stockholm_Indoor_Cup_Dag_1-44',
        '250201-Stockholm_Indoor_Cup_Dag_1-45'],
};

const filterBtnContainer = document.getElementById("filter-container");
const imageContainer = document.getElementById('image-container')

const filterBtnFunction = (span, event) => {
    let activeFilter = document.getElementById('active');
    activeFilter.removeAttribute('id');
    span.setAttribute('id', 'active')
    imageContainer.innerHTML = '';
    initializeGallery(images[event], 'media/sports');
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGallery(images[Object.keys(images)[0]], 'media/sports')

    let flag = 0
    Object.keys(images).forEach(event => {
        const span = document.createElement("span");
        span.textContent = event;
        span.classList.add('filter')
        if (flag == 0) {
            span.setAttribute('id', 'active')
            flag = 1
        }

        span.addEventListener("click", () => {
            filterBtnFunction(span, event)
        });

        filterBtnContainer.appendChild(span);
    });

    window.updateButtonVisibility();

});