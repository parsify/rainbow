/**
 * Objective-C Syntax Highlighting
 *
 * @author Nijiko Yonskai
 * @version 1.0
 */
Rainbow.extend("objective-c", [
  {
    name: 'keyword',
    pattern: /(\b(?:NS|Json|Http|Multipart|UI|IB|\@)\w+\b)/gm
  },
  {
    name: 'keyword',
    pattern: new RegExp(Rainbow.getKeywords('break case catch class copy const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend getter goto inline mutable naked namespace new nil NO noinline nonatomic noreturn nothrow NULL readonly readwrite register reinterpret_cast retain return SEL selectany self setter sizeof static static_cast struct super switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while YES'), 'gm')
  },
  {
    name: 'functions',
    pattern: new RegExp(Rainbow.getKeywords('assert isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time', 'gm'))
  }
]);