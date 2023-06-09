PGDMP         %                {           T2    15.2    15.2 B    Q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            R           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            S           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            T           1262    19004    T2    DATABASE     w   CREATE DATABASE "T2" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "T2";
                postgres    false                        2615    26261    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            U           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            V           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            �            1259    26343    Defensa_pertenece_reino    TABLE     r   CREATE TABLE public."Defensa_pertenece_reino" (
    id_defensa integer NOT NULL,
    id_reino integer NOT NULL
);
 -   DROP TABLE public."Defensa_pertenece_reino";
       public         heap    postgres    false    5            �            1259    26337    Defensas    TABLE     h   CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa character varying(45) NOT NULL
);
    DROP TABLE public."Defensas";
       public         heap    postgres    false    5            �            1259    26336    Defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Defensas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Defensas_id_seq";
       public          postgres    false    227    5            W           0    0    Defensas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Defensas_id_seq" OWNED BY public."Defensas".id;
          public          postgres    false    226            �            1259    26331    Diplomacias    TABLE     �   CREATE TABLE public."Diplomacias" (
    id_reino1 integer NOT NULL,
    id_reino2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
 !   DROP TABLE public."Diplomacias";
       public         heap    postgres    false    5            �            1259    26300    Karts    TABLE     �   CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public."Karts";
       public         heap    postgres    false    5            �            1259    26299    Karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Karts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Karts_id_seq";
       public          postgres    false    218    5            X           0    0    Karts_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Karts_id_seq" OWNED BY public."Karts".id;
          public          postgres    false    217            �            1259    26325    Personaje_habita_reino    TABLE     �   CREATE TABLE public."Personaje_habita_reino" (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    es_gobernante boolean NOT NULL
);
 ,   DROP TABLE public."Personaje_habita_reino";
       public         heap    postgres    false    5            �            1259    26320    Personaje_tiene_trabajo    TABLE     �   CREATE TABLE public."Personaje_tiene_trabajo" (
    id_personaje integer NOT NULL,
    id_trabajo integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date
);
 -   DROP TABLE public."Personaje_tiene_trabajo";
       public         heap    postgres    false    5            �            1259    26293 
   Personajes    TABLE     �   CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    fuerza integer NOT NULL,
    nombre character varying(45) NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto character varying(45)
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false    5            �            1259    26292    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    216    5            Y           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    215            �            1259    26307    Reinos    TABLE     �   CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ubicacion character varying(45) NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public."Reinos";
       public         heap    postgres    false    5            �            1259    26306    Reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reinos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Reinos_id_seq";
       public          postgres    false    5    220            Z           0    0    Reinos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Reinos_id_seq" OWNED BY public."Reinos".id;
          public          postgres    false    219            �            1259    26314    Trabajos    TABLE     �   CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion character varying(45),
    sueldo integer NOT NULL
);
    DROP TABLE public."Trabajos";
       public         heap    postgres    false    5            �            1259    26313    Trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trabajos_id_seq";
       public          postgres    false    5    222            [           0    0    Trabajos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trabajos_id_seq" OWNED BY public."Trabajos".id;
          public          postgres    false    221            �            1259    26262    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �           2604    26340    Defensas id    DEFAULT     n   ALTER TABLE ONLY public."Defensas" ALTER COLUMN id SET DEFAULT nextval('public."Defensas_id_seq"'::regclass);
 <   ALTER TABLE public."Defensas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    26303    Karts id    DEFAULT     h   ALTER TABLE ONLY public."Karts" ALTER COLUMN id SET DEFAULT nextval('public."Karts_id_seq"'::regclass);
 9   ALTER TABLE public."Karts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    26296    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    26310 	   Reinos id    DEFAULT     j   ALTER TABLE ONLY public."Reinos" ALTER COLUMN id SET DEFAULT nextval('public."Reinos_id_seq"'::regclass);
 :   ALTER TABLE public."Reinos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    26317    Trabajos id    DEFAULT     n   ALTER TABLE ONLY public."Trabajos" ALTER COLUMN id SET DEFAULT nextval('public."Trabajos_id_seq"'::regclass);
 <   ALTER TABLE public."Trabajos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            N          0    26343    Defensa_pertenece_reino 
   TABLE DATA           I   COPY public."Defensa_pertenece_reino" (id_defensa, id_reino) FROM stdin;
    public          postgres    false    228   mQ       M          0    26337    Defensas 
   TABLE DATA           1   COPY public."Defensas" (id, defensa) FROM stdin;
    public          postgres    false    227   �Q       K          0    26331    Diplomacias 
   TABLE DATA           H   COPY public."Diplomacias" (id_reino1, id_reino2, es_aliado) FROM stdin;
    public          postgres    false    225   R       D          0    26300    Karts 
   TABLE DATA           T   COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    218   ?R       J          0    26325    Personaje_habita_reino 
   TABLE DATA           i   COPY public."Personaje_habita_reino" (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    224   �R       I          0    26320    Personaje_tiene_trabajo 
   TABLE DATA           j   COPY public."Personaje_tiene_trabajo" (id_personaje, id_trabajo, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    223   S       B          0    26293 
   Personajes 
   TABLE DATA           T   COPY public."Personajes" (id, fuerza, nombre, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    216   fS       F          0    26307    Reinos 
   TABLE DATA           E   COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    220   T       H          0    26314    Trabajos 
   TABLE DATA           =   COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    222   �T       @          0    26262    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   U       \           0    0    Defensas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Defensas_id_seq"', 7, true);
          public          postgres    false    226            ]           0    0    Karts_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Karts_id_seq"', 7, true);
          public          postgres    false    217            ^           0    0    Personajes_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Personajes_id_seq"', 7, true);
          public          postgres    false    215            _           0    0    Reinos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Reinos_id_seq"', 5, true);
          public          postgres    false    219            `           0    0    Trabajos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Trabajos_id_seq"', 4, true);
          public          postgres    false    221            �           2606    26347 4   Defensa_pertenece_reino Defensa_pertenece_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Defensa_pertenece_reino"
    ADD CONSTRAINT "Defensa_pertenece_reino_pkey" PRIMARY KEY (id_defensa, id_reino);
 b   ALTER TABLE ONLY public."Defensa_pertenece_reino" DROP CONSTRAINT "Defensa_pertenece_reino_pkey";
       public            postgres    false    228    228            �           2606    26342    Defensas Defensas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Defensas"
    ADD CONSTRAINT "Defensas_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Defensas" DROP CONSTRAINT "Defensas_pkey";
       public            postgres    false    227            �           2606    26335    Diplomacias Diplomacias_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_pkey" PRIMARY KEY (id_reino1, id_reino2);
 J   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_pkey";
       public            postgres    false    225    225            �           2606    26305    Karts Karts_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_pkey";
       public            postgres    false    218            �           2606    26330 2   Personaje_habita_reino Personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_pkey" PRIMARY KEY (id_personaje, id_reino);
 `   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_pkey";
       public            postgres    false    224    224            �           2606    26324 4   Personaje_tiene_trabajo Personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_pkey" PRIMARY KEY (id_personaje, id_trabajo);
 b   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_pkey";
       public            postgres    false    223    223            �           2606    26298    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    216            �           2606    26312    Reinos Reinos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Reinos"
    ADD CONSTRAINT "Reinos_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Reinos" DROP CONSTRAINT "Reinos_pkey";
       public            postgres    false    220            �           2606    26319    Trabajos Trabajos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trabajos"
    ADD CONSTRAINT "Trabajos_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trabajos" DROP CONSTRAINT "Trabajos_pkey";
       public            postgres    false    222            �           2606    26270 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    26389 ?   Defensa_pertenece_reino Defensa_pertenece_reino_id_defensa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Defensa_pertenece_reino"
    ADD CONSTRAINT "Defensa_pertenece_reino_id_defensa_fkey" FOREIGN KEY (id_defensa) REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Defensa_pertenece_reino" DROP CONSTRAINT "Defensa_pertenece_reino_id_defensa_fkey";
       public          postgres    false    227    3238    228            �           2606    26394 =   Defensa_pertenece_reino Defensa_pertenece_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Defensa_pertenece_reino"
    ADD CONSTRAINT "Defensa_pertenece_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 k   ALTER TABLE ONLY public."Defensa_pertenece_reino" DROP CONSTRAINT "Defensa_pertenece_reino_id_reino_fkey";
       public          postgres    false    3228    220    228            �           2606    26379 &   Diplomacias Diplomacias_id_reino1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino1_fkey" FOREIGN KEY (id_reino1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino1_fkey";
       public          postgres    false    225    3228    220            �           2606    26384 &   Diplomacias Diplomacias_id_reino2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino2_fkey" FOREIGN KEY (id_reino2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino2_fkey";
       public          postgres    false    220    3228    225            �           2606    26354    Karts Karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";
       public          postgres    false    216    218    3224            �           2606    26369 ?   Personaje_habita_reino Personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_personaje_fkey";
       public          postgres    false    216    3224    224            �           2606    26374 ;   Personaje_habita_reino Personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_reino_fkey";
       public          postgres    false    3228    220    224            �           2606    26359 A   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 o   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey";
       public          postgres    false    223    3224    216            �           2606    26364 ?   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey";
       public          postgres    false    222    223    3230            N      x�3�4�2�4�2�4�2�1z\\\ ��      M   h   x�3�t��LN,V.-H-R�OI-�/N,�2��/*)MJ�e�e%r�p��%楧s�r���'���sr:�%�$)8e��9�o������� p��      K      x�3�4�,�2�4�L��@�̎���� B�N      D   }   x�5�;�0�z�>��X�!7���q셀�����HS�����.�
���(���iX��W�$��q���iC}�/�o���q7wU�7C禂�i�������Ud�L>'�O�}��OD��/      J   >   x�3�4�4��4�50�54T04�26�25�L�2�!S�e�i��0��c�i�id`�EO� 0%q      I   <   x�=��	� C��]�$i�D'p�9*H�;È��J�� ��*�,�F�����3���n      B   �   x�E�M�0����T��n�wT�"x�.ha[F����mEr<��$�1�2�`Z��4���.ʁK� T.3s�z؄n�ؑl)�/吏#c�!�*:�f;��-%���kt��R͑T��Ez��
�*�6����w�#��#�˙R�"9��w�4WJ�)�6K      F   �   x�-�A
�0E��)��� �Et%���`�LIDo����v���1�Ȣ�U�avE��G����i�sva��Ik�;y^�!ӦȠ٬*��$g�-�CB�	"� �񇜝O�o�����~�]���c�2��� �0�      H   C   x�3�t��+I�K-��430�2�N�)KL�/RHIU�ITHO�I��L䴄.#N�L�zCS��=... �      @   �   x�m���0 kk�, ��+y�L` �E���m����;���uEZeA��j�Q��薝.���O�.�m��s�\���#`.Z��/uIo�! U���v��;�V��m�X�����Ϳ���{j��K)��-�     