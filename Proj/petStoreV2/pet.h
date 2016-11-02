#ifndef PET_H
#define PET_H

#include <QString>

class Pet
{
public:
    Pet();
    Pet(QString,QString,QString,QString);
    ~Pet();

    void setName(QString);
    QString getName(){return name;}
    void setType(QString);
    QString getType(){return type;}
    void setSize(QString);
    QString getSize(){return size;}
    void setColor(QString);
    QString getColor(){return color;}
    QString name;
    QString type;
    QString size;
    QString color;
private:


};

#endif // PET_H
