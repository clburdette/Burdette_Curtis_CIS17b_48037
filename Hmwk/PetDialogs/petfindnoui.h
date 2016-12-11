#ifndef PETFINDNOUI_H
#define PETFINDNOUI_H

#include <QDialog>

class QVBoxLayout;
class QGridLayout;
class QComboBox;
class QLabel;

class petfindnoui: public QDialog
{
    Q_OBJECT

public:
    petfindnoui(QWidget *parent = 0);

    QVBoxLayout *vLayout1;
    QVBoxLayout *vLayout2;
    QVBoxLayout *vLayout3;
    QGridLayout *gLayout;
    QComboBox *cType;
    QComboBox *cSize;
    QComboBox *cColor;
    QLabel *type;
    QLabel *size;
    QLabel *color;
    QLabel *title;
    QLabel *instruction;
    QPushButton *submit;

signals:
    void sumbitSearch(QString, QString, QString);
};

#endif // PETFINDNOUI_H
