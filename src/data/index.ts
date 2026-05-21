import { Book } from "../types";
import { cap1_3 } from "./cap1_3";
import { cap4_6 } from "./cap4_6";
import { vinde_a_mim } from "./vinde_a_mim";
import { dilemas } from "./dilemas";

export const bookData: Book = {
  title: "LUMEN",
  subtitle: "O Caminho da Promessa na Fé Reformada Confessional",
  author: "Rodrigo Niskier Ferreira Barbosa",
  chapters: [...vinde_a_mim, ...cap1_3, ...cap4_6, ...dilemas]
};
