/********************************************************************************
** Form generated from reading UI file 'results.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RESULTS_H
#define UI_RESULTS_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QDialog>
#include <QtWidgets/QFormLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Results
{
public:
    QLabel *picture;
    QPushButton *pushButton;
    QPushButton *pushButton_2;
    QPushButton *pushButton_3;
    QWidget *layoutWidget;
    QFormLayout *formLayout;
    QLabel *label;
    QLabel *lName;
    QLabel *label_2;
    QLabel *lType;
    QLabel *label_3;
    QLabel *lSize;
    QLabel *label_4;
    QLabel *lColor;

    void setupUi(QDialog *Results)
    {
        if (Results->objectName().isEmpty())
            Results->setObjectName(QStringLiteral("Results"));
        Results->resize(431, 391);
        picture = new QLabel(Results);
        picture->setObjectName(QStringLiteral("picture"));
        picture->setGeometry(QRect(110, 10, 211, 211));
        picture->setFrameShape(QFrame::WinPanel);
        picture->setFrameShadow(QFrame::Sunken);
        pushButton = new QPushButton(Results);
        pushButton->setObjectName(QStringLiteral("pushButton"));
        pushButton->setGeometry(QRect(10, 120, 81, 81));
        pushButton_2 = new QPushButton(Results);
        pushButton_2->setObjectName(QStringLiteral("pushButton_2"));
        pushButton_2->setGeometry(QRect(340, 120, 81, 81));
        pushButton_3 = new QPushButton(Results);
        pushButton_3->setObjectName(QStringLiteral("pushButton_3"));
        pushButton_3->setGeometry(QRect(150, 330, 121, 41));
        layoutWidget = new QWidget(Results);
        layoutWidget->setObjectName(QStringLiteral("layoutWidget"));
        layoutWidget->setGeometry(QRect(110, 240, 211, 72));
        formLayout = new QFormLayout(layoutWidget);
        formLayout->setObjectName(QStringLiteral("formLayout"));
        formLayout->setContentsMargins(0, 0, 0, 0);
        label = new QLabel(layoutWidget);
        label->setObjectName(QStringLiteral("label"));

        formLayout->setWidget(0, QFormLayout::LabelRole, label);

        lName = new QLabel(layoutWidget);
        lName->setObjectName(QStringLiteral("lName"));

        formLayout->setWidget(0, QFormLayout::FieldRole, lName);

        label_2 = new QLabel(layoutWidget);
        label_2->setObjectName(QStringLiteral("label_2"));

        formLayout->setWidget(1, QFormLayout::LabelRole, label_2);

        lType = new QLabel(layoutWidget);
        lType->setObjectName(QStringLiteral("lType"));

        formLayout->setWidget(1, QFormLayout::FieldRole, lType);

        label_3 = new QLabel(layoutWidget);
        label_3->setObjectName(QStringLiteral("label_3"));

        formLayout->setWidget(2, QFormLayout::LabelRole, label_3);

        lSize = new QLabel(layoutWidget);
        lSize->setObjectName(QStringLiteral("lSize"));

        formLayout->setWidget(2, QFormLayout::FieldRole, lSize);

        label_4 = new QLabel(layoutWidget);
        label_4->setObjectName(QStringLiteral("label_4"));

        formLayout->setWidget(3, QFormLayout::LabelRole, label_4);

        lColor = new QLabel(layoutWidget);
        lColor->setObjectName(QStringLiteral("lColor"));

        formLayout->setWidget(3, QFormLayout::FieldRole, lColor);


        retranslateUi(Results);

        QMetaObject::connectSlotsByName(Results);
    } // setupUi

    void retranslateUi(QDialog *Results)
    {
        Results->setWindowTitle(QApplication::translate("Results", "Dialog", 0));
        picture->setText(QString());
        pushButton->setText(QApplication::translate("Results", "Back", 0));
        pushButton_2->setText(QApplication::translate("Results", "Forward", 0));
        pushButton_3->setText(QApplication::translate("Results", "Return", 0));
        label->setText(QApplication::translate("Results", "Name:", 0));
        lName->setText(QApplication::translate("Results", "TextLabel", 0));
        label_2->setText(QApplication::translate("Results", "Type:", 0));
        lType->setText(QApplication::translate("Results", "TextLabel", 0));
        label_3->setText(QApplication::translate("Results", "Size:", 0));
        lSize->setText(QApplication::translate("Results", "TextLabel", 0));
        label_4->setText(QApplication::translate("Results", "Color:", 0));
        lColor->setText(QApplication::translate("Results", "TextLabel", 0));
    } // retranslateUi

};

namespace Ui {
    class Results: public Ui_Results {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RESULTS_H
