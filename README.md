# LocalMaterialDesignIcons
A boilerplate showing use of locally hosted Material Design Icons in ASP.NET 5

## Usage

After you clone this repository execute from commandline:
```
dnu restore
```
This will install ASP.NET 5 dependencies and also install `Material Design Icons` via `NPM` and `Bower`. The `Gulp` task is then executed that copies web fonts into `wwwroot` directory.

To run web site execute:
```
dnx . kestrel
```

## Static files handling in ASP.NET 5

Useful documentation bits on subject:

[Working with Static Files](http://docs.asp.net/en/latest/fundamentals/static-files.html)

## Author

@blazejewicz
