import { Book } from "../types";
import { cap1_3 } from "./cap1_3";
import { cap4_6 } from "./cap4_6";

export const bookData: Book = {
  title: "O Caminho da Promessa",
  subtitle: "Doutrina, História e Vida Cristã à Luz da Fé Reformada Confessional",
  author: "Rodrigo Niskier Ferreira Barbosa",
  chapters: [...cap1_3, ...cap4_6]
};
